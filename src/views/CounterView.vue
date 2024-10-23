<template>
  <div class="my-5 card text-center">
    <h2 class="card-header">Counter Example</h2>
    <div class="card-body">
      <div class="row my-4">
        <div class="col-sm-6 col-lg-3 my-2">
          <button @click="add" class="btn btn-primary">Add to count</button>
        </div>
        <div class="col-sm-6 col-lg-3 my-2">
          <button @click="subtract" class="btn btn-primary">
            Subtract to count
          </button>
        </div>
        <div class="col-sm-6 col-lg-3 my-2">
          <div class="input-group">
            <input
              type="number"
              class="form-control"
              v-model="amount"
              @keyup.enter="addAmount"
            />
            <button
              @click="addAmount"
              class="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Add {{ amount }} to count
            </button>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 my-2">
          <button @click="count = 0" class="btn btn-secondary">
            Reset count
          </button>
        </div>
      </div>
    </div>
    <h1 class="card-footer text-body-secondary m-0">Count: {{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      amount: 0,
    };
  },

  methods: {
    add() {
      this.count++;
    },
    subtract() {
      this.count--;
    },
    addAmount() {
      this.count = this.count + this.amount;
    },
  },
};
</script>

<style scss scoped></style>
