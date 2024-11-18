<template>
  <div class="hello">
    <div style="width:970px;height:300px;margin:auto">
      <LivePlayer :videoUrl= "url" fluent autoplay="true" live stretch="true"></LivePlayer>
    </div>
  </div>
</template>

<script>
import LivePlayer from '@liveqing/liveplayer-v3'

export default {
  name: 'App',
  components: {
    LivePlayer
  },
  data() {
    return{
      url: ''
      // url: 'https://docs.unrealengine.com/4.27/Attachments/WorkingWithMedia/IntegratingMedia/MediaFramework/HowTo/StreamMediaSource/Infiltrator%20Demo.mp4'
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
