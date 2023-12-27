<template>
  <div class="grid gap-2 min-h-24 border px-16 py-4 md:grid-cols-2 lg:grid-cols-4">
    <div class="px-4 py-0 flex items-center gap-2">
      <font-awesome-icon
        :icon="['fas', 'briefcase']"
        class="border border-slate-400 p-2 rounded-full w-4 h-4 text-slate-700"
      />
      <select class="select select-sm w-full max-w-xs">
        <option disabled selected>Job Type</option>
        <option>Full time</option>
        <option>Contract</option>
      </select>
    </div>
    <div class="px-4 py-0 flex items-center gap-2">
      <font-awesome-icon
        :icon="['fas', 'city']"
        class="border border-slate-400 p-2 rounded-full w-4 h-4 text-slate-700"
      />
      <select class="select select-sm w-full max-w-xs">
        <option disabled selected>Pick a city</option>
        <option>Addis Ababa</option>
        <option>Arba Minch</option>
        <option>Hawassa</option>
        <option>Soddo</option>
        <option>Karat</option>
      </select>
    </div>
    <div class="px-4 py-0 flex items-center gap-2">
      <font-awesome-icon
        :icon="['fas', 'hand-holding-dollar']"
        class="border border-slate-400 p-2 rounded-full w-4 h-4 text-slate-700"
      />
      <select class="select select-sm w-full max-w-xs">
        <option disabled selected>Sallary</option>
        <option>Per hour</option>
        <option>Per day</option>
        <option>Per month</option>
        <option>Per year</option>
      </select>
    </div>
    <div class="py-0 flex flex-col justify-center">
      <div class="label">
        <span class="label-text">What is your expectation?</span>
      </div>
      <input type="range" min="0" max="100" value="40" class="range range-accent range-xs" />
    </div>
  </div>
</template>
