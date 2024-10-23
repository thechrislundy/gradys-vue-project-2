<template>
  <div class="col-sm-6 col-lg-3 my-2">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        v-model="item"
        @keyup.enter="addToList"
      />
      <button
        @click="addToList"
        class="btn btn-primary"
        type="button"
        id="button-addon2"
      >
        Add to List
      </button>
    </div>
    {{ list }}
    <draggable item-key="id" tag="ul" class="list-group" :list="list">
      <template #item="{ element }">
        <li class="list-group-item">
          {{ element.string
          }}<button
            @click="removeFromList(element.id)"
            class="btn btn-danger pull-right"
            type="button"
            id="button-addon2"
          >
            delete
          </button>
        </li>
      </template>
    </draggable>
    <div class="input-group mb-3">
      <select
        v-model="sortMode"
        class="form-control"
        id="exampleFormControlSelect1"
      >
        <option value="-1">A-Z</option>
        <option value="1">Z-A</option>
      </select>
      <div class="input-group-append">
        <button
          @click="sortList(sortMode)"
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Sort
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      list: [],
      item: "",
      sortMode: null,
    };
  },
  components: {
    draggable,
  },

  methods: {
    addToList() {
      this.list.push({
        string: this.item,
        id: this.list.length,
      });
      this.item = "";
    },
    removeFromList(x) {
      this.list = this.list.filter((item) => item.id != x);
    },
    sortList(x = 1) {
      this.list.sort((a, b) => {
        const nameA = a.string.toUpperCase(); // ignore upper and lowercase
        const nameB = b.string.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -x;
        }
        if (nameA < nameB) {
          return x;
        }

        // names must be equal
        return 0;
      });
    },
  },
};
</script>

<style scss scoped></style>
