<template>
  <div class="max-business-container">
    <div class="headling">
      <h2>Máximo negocio permitido según su tipo para cada usuario</h2>
    </div>
    <div class="max-business-wrapper">
      <div class="max-business-box">
        <p>Local</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Profesional</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Freelancer</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Moviliy</p>
        <input value="5" class="box" />
      </div>
      <div class="max-business-box">
        <p>Buy/Sell</p>
        <input value="10" class="box" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.max-business-wrapper {
  margin-left: 60px;

  @media screen and (max-width: 500px) {
    display: flex;
    margin-left: unset;
    flex-direction: column;
    align-items: center;
  }
}

.max-business-box {
  display: grid;
  justify-items: flex-end;
  grid-template-columns: 1fr 1fr;
  gap: 0 10px;
  align-items: center;
  width: 200px;
  margin-top: 10px;

  .box {
    width: 80px;
  }
}
</style>
