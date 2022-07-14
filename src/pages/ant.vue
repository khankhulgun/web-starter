<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-20">

    <div class="py-5">
      <h3>Modal</h3>
      <a-button type="primary" @click="showModal">Open Modal</a-button>

      <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" :footer="null">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>

    <div class="py-5">
      <h3>Notification</h3>
      <a-button @click="() => openNotificationWithIcon('success')">Success</a-button>
      <a-button @click="() => openNotificationWithIcon('info')">Info</a-button>
      <a-button @click="() => openNotificationWithIcon('warning')">Warning</a-button>
      <a-button @click="() => openNotificationWithIcon('error')">Error</a-button>
    </div>


    <div class="py-5">
      <h3>Tab</h3>
      <a-radio-group v-model:value="tabPosition" style="margin: 8px">
        <a-radio-button value="top">top</a-radio-button>
        <a-radio-button value="bottom">bottom</a-radio-button>
        <a-radio-button value="left">left</a-radio-button>
        <a-radio-button value="right">right</a-radio-button>
      </a-radio-group>

      <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition" animated>
        <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
      </a-tabs>
    </div>

    <div class="py-5">
      <h3>Skeleton</h3>
      <a-switch :checked="!loading" @change="changeLoading" />
      <a-list item-layout="vertical" size="large" :data-source="listData">
        <template #renderItem="{ item }">
          <a-list-item key="item.title">
            <template v-if="!loading" #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 8px"></component>
              {{ text }}
            </span>
            </template>
            <template #extra>
              <img
                v-if="!loading"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            </template>
            <a-skeleton :loading="loading" active avatar>
              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>
                <template #avatar><a-avatar :src="item.avatar" /></template>
              </a-list-item-meta>
              {{ item.content }}
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </div>



  </div>
</template>

<script>
import { notification } from 'ant-design-vue';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
export default {
  name: 'ant',
  components:{
    StarOutlined, LikeOutlined, MessageOutlined
  },
  data(){
    return {
      visible:false,
      activeKey:"1",
      tabPosition:"left",
      loading:true,
      listData:[
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part 1`,
          avatar: 'https://joeschmoe.io/api/v1/random',
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        },
        {
          href: 'https://www.antdv.com/',
          title: `ant design vue part 2`,
          avatar: 'https://joeschmoe.io/api/v1/random',
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        }
      ],
      actions:[
        { type: 'star-outlined', text: '156' },
        { type: 'like-outlined', text: '156' },
        { type: 'message-outlined', text: '2' },
      ],

    }
  },
  methods:{
    showModal() {
      this.visible = true;
    },
    handleOk(){
      this.visible = false;
    },
    openNotificationWithIcon(type) {
      notification[type]({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
    changeLoading(){
      this.loading = !this.loading;
    }
  }
}
</script>

<style scoped>

</style>
