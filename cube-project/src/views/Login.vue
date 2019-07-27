<template>
  <div>
    <h1>登录</h1>
    <cube-loading :size="40"></cube-loading>
    <cube-form @model="model" @schema="schema" @submit="handleSubmit" @validate="handleValidate"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            label: "用户名",
            modelKey: "username",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            label: "密码",
            modelKey: "password",
            props: {
              placeholeder: "请输入密码",
              type: "password",
              eye:{open:false}
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("提交表单");
    },
    handleValidate() {
      console.log("校验");
    }
  }
};
</script>

<style lang="less" scoped>
</style>