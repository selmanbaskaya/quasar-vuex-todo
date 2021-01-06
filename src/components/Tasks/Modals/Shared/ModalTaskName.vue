<template>
  <div class="row">
          <q-input
            class="col"
            outlined
            :value="name"
            @input="$emit('update:name', $event)"
            label="Task name"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            ref="name"
          >
            <template v-slot:append>
              <q-icon v-if="name" @click="$emit('updata:name', '')" name="close" class="cursor-pointer" />
            </template>
          </q-input>
        </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style>

</style>