<template>
<div>
    <list-header bgColor="bg-orange-5">
        ToDo's
    </list-header>
  <q-list separator bordered>
      <task 
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      >
      </task>
    </q-list>
</div>
</template>

<script>
export default {
    props: ['tasksTodo'],
    components: {
        'task': require('components/Tasks/Task.vue').default,
        'list-header': require('components/Shared/ListHeader').default,
    }
}
</script>

<style>

</style>