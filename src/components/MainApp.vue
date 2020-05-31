<template>
  <div class="mt-5 container">
    <h1>Einstein Test</h1>
    <p class="ml-1">How fast and smart you are?</p>

    <div class="row">
      <div class="col-12 col-md-2" v-for="house in houses" :key="house.id">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="color-select">Color</label>
              <select class="form-control" id="color-select" v-model="house.color">
                <option v-for="color in colors()" :key="color">{{color}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="country-select">Country</label>
              <select class="form-control" id="country-select" v-model="house.country">
                <option v-for="country in countries()" :key="country">{{country}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="drink-select">Drink</label>
              <select class="form-control" id="drink-select" v-model="house.drink">
                <option v-for="drink in drinks()" :key="drink">{{drink}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cigar-select">Cigar</label>
              <select class="form-control" id="cigar-select" v-model="house.cigar">
                <option v-for="cigar in cigars()" :key="cigar">{{cigar}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="animal-select">Animal</label>
              <select class="form-control" id="animal-select" v-model="house.animal">
                <option v-for="animal in animals()" :key="animal">{{animal}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {animals, build_empty, cigars, colors, countries, drinks} from "@/core";

  export default {
    data() {
      return {
        houses: build_empty()
      }
    },
    methods: {
      colors() {
        return colors;
      },
      countries() {
        return countries;
      },
      drinks() {
        return drinks;
      },
      cigars() {
        return cigars;
      },
      animals() {
        return animals;
      }
    }
  }
</script>

<style>
  .form-group {
    padding: 0px !important;
    margin: 0px !important;
    border: 0px !important;
  }

  label {
    font-size: smaller;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
    padding-top: 0px !important;
    margin-top: 0px !important;
  }

  select.form-control {
    max-height: 25px;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
    font-size: small;
  }
</style>