<style>
.ant-card{
  width: 300px;
  margin: 16px 16px 0 0 ;
  display: inline-block;
}
.ant-card-meta-description{
  height:66px;
}
.ant-card-actions li{
  list-style: none;
}
.ant-card-actions{
  margin: 0 !important;
}
</style>
<template>

  <a :href="item.vlink"  v-for="item in list" target="_blank">

  <a-card hoverable >
    <template #cover>
      <a :href="item.cover"></a>
      
      <img
        alt="example"
        :src="'https://cdn.jsdelivr.net/gh/woniuppp/static/coder/'+item.title.split('.')[0]+'.jpg'"
      />

    </template>
    <template #actions>
      <a :href="link.link" target="_blank" v-for="link in item.links" :key="link.link">
        <GithubOutlined  v-if="link.icon=='github'"/>
        <TwitterOutlined v-if="link.icon=='twitter'" />
        <!-- <span class="anticon" v-if="link.icon?.svg" v-html="link.icon?.svg"></span> -->
      </a>
    </template>
    <a-card-meta :title="item.name" :description="item.title">
      <template #avatar>
        <a-avatar :src="item.avatar" />
      </template>
    </a-card-meta>
  </a-card>
</a>

</template>
<script setup>
import { TwitterOutlined,GithubOutlined } from '@ant-design/icons-vue';
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
</script>