# Demo
## Hello World
``` vue
<template>
    <div id="app">
        <ol>
            <li v-for="msg in ch1">{{msg.message}}</li>
        </ol>
        <button v-on:click="push">push</button>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                // $pnGetMessage 获得频道推送来的消息 返回为Array 
                // 可以额外接收第二个参数为Function 为每一条接收到的数据进行处理
                ch1: this.$pnGetMessage('ch1'),
            },
        },
        methods: {
            push() {
                // $pnPublish为频道推送消息 第二个参数为推送成功的回调
                this.$pnPublish({
                    channel: 'ch1',
                    message: Date.now()
                },
                (status, response) => console.log(status, response));
            },
        },
        mounted() {
          // 监听频道 启动长链接  
          this.$pnSubscribe({
            channels: ['ch1']
          });
        },
    };
</script>

```