<script setup lang="ts">
import type { RoomRecord } from "~/data/rooms";

const props = defineProps<{
  facilities: NonNullable<RoomRecord["about"]>["facilities"];
}>();

const facilityGroups = computed(() => {
  const groupLabels = {
    room: "Room",
    climate: "Climate",
    technology: "Technology",
    bathroom: "Bathroom",
    onrequest: "On request",
  } as const;

  return props.facilities.groupOrder
    .map((groupKey) => {
      const items = props.facilities.items.filter((item) => item.group === groupKey);
      return {
        key: groupKey,
        label: groupLabels[groupKey],
        items,
      };
    })
    .filter((group) => group.items.length);
});
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <dl
      v-for="(group, groupIndex) in facilityGroups"
      :key="`facility-group-${group.key}`"
      class="flex flex-col gap-2 border-border lg:pr-6"
      :class="[
        groupIndex % 3 !== 2 ? 'lg:border-r' : '',
      ]"
    >
      <dt>
        <BaseOverline>{{ group.label }}</BaseOverline>
      </dt>
      <dd>
        <ul role="list">
          <li
            v-for="(facility, facilityIndex) in group.items"
            :key="`facility-item-${group.key}-${facilityIndex}`"
            class="border-b border-border py-2 text-body text-muted"
          >
            {{ facility.label }}
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
