<template>
        <nav class="navbar navbar-expand-lg mb-5" style="background-color:#638ec1">
            <div class="container-fluid">
              <a class="navbar-brand" href="{% url 'recipes:recipe_list' %}"><img class="navbar-image" src="{% static 'recipes/images/general/onion_purple.jpg' %}" alt="VeggieVibe" aria-current="page" id="home-icon">VeggieVibe</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="{% url 'recipes:recipe_list' %}">Home</a>
                  <a class="nav-link" href="#">API</a>
                  <a class="nav-link" href="https://github.com/spariva/VeggieVibe/issues" target="_blank">Support</a>
                  <a class="nav-link" target="_blank" href="https://github.com/spariva">Developer</a>
                </div>
              </div>
            </div>
          </nav>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style></style>