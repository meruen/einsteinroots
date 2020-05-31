<template>
  <div class="mt-5 container">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>Einstein Test</h1>
      </div>
      <div class="col-12 col-md-6 text-center">
        <button @click="start_timer()" v-if="current_state === 'idle'" class="btn btn-primary btn-sm">START</button>
        <button @click="surrender()" v-if="current_state === 'running'" class="btn btn-secondary btn-sm">SURRENDER</button>
        <button @click="start_timer()" v-if="current_state === 'finished'" class="btn btn-primary btn-sm">FINISHED</button>
        <h1>{{formated_time}}</h1>
      </div>
    </div>

    <p class="ml-1">How fast and smart you are?</p>

    <div class="row">
      <div class="col-12 col-md-2 ml-0 pl-0" v-for="house in houses" :key="house.id">
        <div class="card">
          <div class="card-body">
            <h5>house {{house.id + 1}}</h5>
            <div class="form-group">
              <label for="color-select">Color</label>
              <select @change="validate" class="form-control" id="color-select" v-model="house.color">
                <option v-for="color in colors()" :key="color">{{color}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="country-select">Country</label>
              <select @change="validate" class="form-control" id="country-select" v-model="house.country">
                <option v-for="country in countries()" :key="country">{{country}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="drink-select">Drink</label>
              <select @change="validate" class="form-control" id="drink-select" v-model="house.drink">
                <option v-for="drink in drinks()" :key="drink">{{drink}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="cigar-select">Cigar</label>
              <select @change="validate" class="form-control" id="cigar-select" v-model="house.cigar">
                <option v-for="cigar in cigars()" :key="cigar">{{cigar}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="animal-select">Animal</label>
              <select @change="validate" class="form-control" id="animal-select" v-model="house.animal">
                <option v-for="animal in animals()" :key="animal">{{animal}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-md-4">
        <div class="form-check" v-for="check in tasks(true)" :key="check.description">
          <input type="checkbox" class="form-check-input" v-model="check.checked" id="acomplished">
          <label class="form-check-label" for="acomplished">{{check.description}}</label>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="form-check" v-for="check in tasks(false)" :key="check.description">
          <input type="checkbox" class="form-check-input" v-model="check.checked" id="acomplishedx">
          <label class="form-check-label" for="acomplishedx">{{check.description}}</label>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {animals, build_empty, build_empty_checks, cigars, colors, countries, drinks, validate} from "@/core";

  export default {
    data() {
      return {
        houses: build_empty(),
        checks: build_empty_checks(),
        timer: '00:00:00',
        timer_interval: null,
        time_passed: 0,
        current_state: 'idle'
      }
    },
    computed: {
      formated_time() {
        return this.timer;
      }
    },
    mounted() {
      //this.start_timer();
    },
    methods: {
      tasks(first = false) {
        if (first) {
          return this.checks.slice(0, 8);
        } else {
          return this.checks.slice(8);
        }
      },
      tick() {
        const time = this.timer.split(':');
        let hours = parseInt(time[0]);
        let mins = parseInt(time[1]);
        let secs = parseInt(time[2]);

        if (secs < 59) {
          secs += 1;
        } else {
          secs = 0;
          if (mins < 59) {
            mins += 1;
          } else {
            mins = 0;
            hours += 1;
          }
        }

        if (hours < 10) hours = `0${hours}`;
        if (mins < 10) mins = `0${mins}`;
        if (secs < 10) secs = `0${secs}`;
        this.timer = `${hours}:${mins}:${secs}`;
      },
      start_timer() {
        this.timer = '00:00:00';
        this.current_state = 'running';
        this.timer_interval = setInterval(() => this.tick(), 1000);
      },
      surrender() {
        clearInterval(this.timer_interval);
        this.current_state = 'idle';
        this.timer = '00:00:00';
        this.houses = build_empty();
        this.checks = build_empty_checks();
      },
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
      },
      validate() {
        this.checks = validate(this.houses);
        let valid = true;

        for (let i = 0; i < this.checks.length; i++) {
          let check = this.checks[i];
          if (!check.checked) {
            valid = false;
            break;
          }
        }

        if (valid) {
          this.current_state = 'finished';
          clearInterval(this.timer_interval);
        }
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
    font-size: smaller;
    color:whitesmoke ;
    background: grey;
  }
</style>