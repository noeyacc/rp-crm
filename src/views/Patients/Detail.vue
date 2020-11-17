<template>
  <div>
    <v-row>
      <v-col :cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="space-between">
            <v-col cols="4" md="4"
              ><v-text-field
                v-model="formData.name"
                label="姓名"
                :rules="[v => !!v || '請輸入姓名']"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="4" md="4"
              ><v-select
                outlined
                :items="['男', '女']"
                v-model="formData.sex"
                label="性別"
                :rules="[v => !!v || '請選擇性別']"
                required
              ></v-select
            ></v-col>
            <v-col cols="4" md="4"
              ><v-select
                outlined
                :items="['A', 'AB', 'B', 'O']"
                v-model="formData.bloodType"
                label="血型"
                :rules="[v => !!v || '請選擇血型']"
                required
              ></v-select
            ></v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="4" md="4"
              ><v-menu
                v-model="datepickerMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template
                  v-slot:activator="{
                    on,
                    attrs
                  }"
                >
                  <v-text-field
                    v-model="formData.birthday"
                    label="出生年月日"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="formData.birthday" @input="datepickerMenu = false"></v-date-picker> </v-menu
            ></v-col>
            <v-col cols="4" md="4"
              ><v-text-field
                v-model="formData.age"
                label="年齡"
                :rules="[v => !!v || '請輸入年齡']"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="4" md="4"
              ><v-text-field
                v-model="formData.phone"
                label="連絡電話"
                :rules="[v => !!v || '請輸入電話']"
                required
              ></v-text-field
            ></v-col>
          </v-row>
          <v-row>
            <v-col cols="4" md="4"
              ><v-text-field
                v-model="formData.contactName"
                label="緊急連絡人姓名"
                :rules="[v => !!v || '請輸入緊急連絡人姓名']"
                required
              ></v-text-field
            ></v-col>
            <v-col cols="4" md="4"
              ><v-text-field
                v-model="formData.contactPhone"
                label="緊急連絡人電話"
                :rules="[v => !!v || '請輸入緊急連絡人電話']"
                required
              ></v-text-field
            ></v-col>
          </v-row>

          <v-btn color="error" class="mr-4" @click="cancel">
            取消
          </v-btn>
          <v-btn color="success" class="mr-4" @click="validate">
            送出
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import { deepCopy } from "@UTIL/other";
import { paddingZeroLeft } from "@UTIL/format";
export default {
  name: "PatientDetail",
  data() {
    return {
      id: "",
      valid: true,
      datepickerMenu: false,
      formData: {
        name: "",
        sex: "",
        bloodType: "",
        birthday: "",
        age: "",
        phone: "",
        contactName: "",
        contactPhone: ""
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    id && ((this.id = id), this.getData(id));
    id || this.getNewDataID();
  },
  methods: {
    getData(id) {
      db.collection("patients")
        .doc(id)
        .get()
        .then(snapshot => {
          let data = snapshot.data();
          data.birthday = new Date(data.birthday.seconds * 1000);
          data.sex = data.sex === 1 ? "男" : "女";
          // this.formData = data;
          this.$refs.form.resetValidation();
        })
        .catch(error => {
          console.log("Get Detail data fail: ", error);
        });
    },
    validate() {
      // 重置表單驗證
      // this.$refs.form.resetValidation();
      // 表單驗證
      if (!this.$refs.form.validate()) return;
      let params = deepCopy(this.formData);
      this.handleCreate(params);
    },
    async handleCreate(params) {
      params.birthday = new Date(params.birthday).getTime();
      params.sex = params.sex === "男" ? 1 : 2;
      params.id = `PA${paddingZeroLeft(this.id, 5)}`;
      // 新增患者資料
      await db
        .collection("patients")
        .doc(params.id)
        .set(params)
        .then(() => {
          console.log("Add success");
          return { status: "success" };
        })
        .catch(() => {
          console.log("Add fail");
          return { status: "fail" };
        });
      this.$router.push({
        name: "Patients"
      });
    },
    // 取得新資料Id
    getNewDataID() {
      return db
        .collection("patients")
        .get()
        .then(docs => {
          let list = [];
          docs.forEach(el => {
            list.push({
              ...el.data()
            });
          });
          this.id = list.length + 1;
        })
        .catch(error => {
          console.log("Get list fail", error);
        });
    },
    cancel() {
      this.$router.push({
        name: "Patients"
      });
      // 重置表單驗證
      this.$refs.form.resetValidation();
      // 重置表單
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
/deep/ .v-input__prepend-outer {
  display: none;
}
</style>
