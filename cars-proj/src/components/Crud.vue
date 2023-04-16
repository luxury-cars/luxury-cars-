<script>
import axios from "axios"

export default {
    data() {
        return {
            owner: {},
            cars: [],
            inputValue: 0,
            showId: false,
            togleId: false,
            filteredCars: [],
            searchQuery: "",
            car: {
                make: "",
                model: "",
                year: 0,
                color: "",
                price: 0,
            },
            isUpdate: false
        }
    },
    watch: {
        showId() {
            axios.get(`http://localhost:5002/api/product/1`)
                .then((res) => {
                    console.log(res.data)
                    this.cars = res.data
                    this.filteredCars = res.data
                })
                .catch(err => console.log(err))

        }
    },
    async mounted() {
        try {
            const cars = await axios.get(`http://localhost:5002/api/product/1`);
            const owners = await axios.get(`http://localhost:5002/api/product/id/1`);
            this.owner = owners.data
            this.cars = cars.data
            this.filteredCars = this.cars.filter((car) =>
                car.make.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        getAmount(event) {
            console.log(event.target.value);
            this.inputValue = event.target.value
        },
        handleLogOut() {
            console.log(this.filteredCars)
        },

        handleSearchInputChange(event) {
            this.filteredCars = this.cars.filter((car) =>
                car.make.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
        },

        handleIdClick() {
            this.showId = !this.showId;
        },

        deleteCar(id) {
            const deletone = this.cars.find(car => car.id === id);
            if (deletone.make === 0) {
                axios.delete(`http://localhost:5002/api/rent/delete/${id}`)
                    .then(res => { this.showId = !this.showId })
                    .catch(err => console.log(err))
            }
        },

        async mounted() {
            const carId = 1; // ID of the car to update or -1 to add a new car
            if (carId === -1) {
                // Add new car
                this.isUpdate = false;
            } else {
                // Get car details to update
                this.isUpdate = true;
                const response = await axios.get(`http://localhost:5002/api/rent/update/${carId}`);
                this.car = response.data;
            }
        },

        async handleSubmit() {
            if (this.isUpdate) {
                // Update existing car
                const response = await axios.put(`http://localhost:5002/api/rent/update/${this.car.id}`, this.car);
                if (response) {
                    this.showId = !this.showId;
                }
            } else {
                // Add new car
                const response = await axios.post(`http://localhost:5002/api/product/add`, this.car);
                if (response) {
                    this.showId = !this.showId;
                }
            }
        }
    }
}
    


</script>
<template>
    <div class="allowner">
      <button class="logout" @click="handleLogOut">Log Out</button>
      <div class="headOwner">
        <h1>
          <span class="welcomeword">Welcome&nbsp;&nbsp;&nbsp;</span>
          {{ owner[0]?.first_name }},
          {{ owner[0]?.last_name }}
        </h1>
        <h1 class="urid" @click="handleIdClick">
          &nbsp;&nbsp;&nbsp;Your id: {{ togleId ? owner[0]?.id_owner :
          '*****' }}
        </h1>
      </div>
      <h2 class="car-id-list">Your car ids</h2>
      <div class="input-car-ids">
        <label for="searchInput"></label>
        <input placeholder="Search for a car by its id or name " type="text" v-model="searchQuery" />
        <input type="button" value="Search" @click="handleSearchInputChange" />
      </div>
      <ul class="car-list">
        <li v-for="(car, index) in filteredCars" class="car-card">
          <div class="card-header">
            <h3>{{ car.make }} {{ car.model }} ({{ car.year }})</h3>
            <input
              type="button"
              value="X"
              class="delete-button"
              @click="handleDeleteCar(car.id)"
            />
            <br />
          </div>
          <div class="card-body">
            <p>Color: {{ car.color }}</p>
            <p>Price: {{ car.price }} TND</p>
            <div class="form-inputs">
              <input type="text" v-model="car.make" placeholder="Make" />
              <input type="text" v-model="car.model" placeholder="Model" />
              <input type="number" v-model="car.year" placeholder="Year" />
              <input type="text" v-model="car.color" placeholder="Color" />
              <input type="number" v-model="car.price" placeholder="Price" />
              <input type="button" v-show="!isUpdate" value="Add Car" @click="handleSubmit" />
              <input type="button" v-show="isUpdate" value="Update Car" @click="handleSubmit" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template> 
<style scoped></style>
