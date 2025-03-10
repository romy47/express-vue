<template>
  <header class="bg-green-600 py-4 text-left w-full flex justify-between">
    <h1 class="text-white text-2xl px-4 font-semibold">Automatic Toll Dashboard</h1>
    <nav class="mt-2">
      <ul class="flex justify-center px-4">
        <li>
          <RouterLink to="/" class="text-white hover:underline text-xl mx-2">
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/payment" class="text-white hover:underline text-xl mx-2">
            Payment
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
