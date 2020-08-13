<template>
  <div id="ability-save-dc">
    <span class="ability-save-dc">{{ abilitySaveDc }}</span>
    <span>Ability Save DC</span>
  </div>
</template>

<script>
export default {
  name: 'abilitySaveDc',
  props: ['abilitySaveDc']
}
</script>

<style>
#ability-save-dc {
  background-image: url('../assets/text_frame_6.png');
  background-size: 100% 100%;
  padding: 30px 80px;
}

#ability-save-dc .ability-save-dc {
  border: 1px solid darkred;
  padding: 4px 10px;
  margin-right: 5px;
  color: darkred;
  font-weight: bold;
}
</style>
