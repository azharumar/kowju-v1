<template>
  <section aria-label="Room booking form" class="relative z-10 -mt-12 md:-mt-14">
    <BaseContainer width="wide">
      <div class="rounded-xl bg-surface p-4 shadow-lg md:p-5">
        <form class="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
          <label class="flex flex-col gap-2 text-body-sm font-semibold text-text">
            Check In
            <input
              type="date"
              name="checkIn"
              class="rounded-md border border-border bg-surface px-3 py-2 text-body text-text"
            />
          </label>
          <label class="flex flex-col gap-2 text-body-sm font-semibold text-text">
            Check Out
            <input
              type="date"
              name="checkOut"
              class="rounded-md border border-border bg-surface px-3 py-2 text-body text-text"
            />
          </label>
          <label class="flex flex-col gap-2 text-body-sm font-semibold text-text">
            Guests
            <select
              name="guests"
              class="rounded-md border border-border bg-surface px-3 py-2 text-body text-text"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <div class="flex flex-col gap-2">
            <p class="text-body font-semibold text-text">From 4,500 INR/Night</p>
            <BaseButtonPrimary class="w-full md:w-auto">Check Availability</BaseButtonPrimary>
          </div>
        </form>
        <p class="mt-3 text-body-sm text-muted">
          Enjoy 30% off on our best rooms for elevated comfort.
        </p>
      </div>
    </BaseContainer>
  </section>
</template>
