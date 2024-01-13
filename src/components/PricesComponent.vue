<script>
import prices from '/src/assets/prices.json'
export default {
  name: "PricesComponent",
  data(){
    return {
      priceList: prices
    }
  },
}
</script>

<template>
  <section class="course-price" id="price-section">
    <h1 class="name">Course PRICELIST</h1>
    <div class="table-price">
      <table>
        <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Investing</th>
          <th scope="col">Mining</th>
          <th scope="col">Portfolio</th>
          <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody >
        <tr  v-for="(el,ind) in priceList">
          <td scope="row" data-label="Course">{{ el.course }} </td>
          <td data-label="Investing">{{ el.investing }}</td>
          <td data-label="Mining">{{ el.mining }}</td>
          <td data-label="Portfolio">{{ el.portfolio }}</td>
          <td data-label="Price">{{ el.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>