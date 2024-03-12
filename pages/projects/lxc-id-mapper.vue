<template>
  <article class="prose m-a">
    <ContentDoc v-slot="{ doc }" :query="query">
      <ContentRenderer :value="doc" />
    </ContentDoc>

    <h2>{{ $t('projects.lxcIdMapper.mapping.title') }}</h2>

    <p>{{ $t('projects.lxcIdMapper.mapping.text') }}</p>

    <table>
      <thead>
        <tr>
          <th>{{ $t('projects.lxcIdMapper.mapping.table.containerId') }}</th>
          <th>{{ $t('projects.lxcIdMapper.mapping.table.hostId') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <input v-model="item.containerId" type="number" :placeholder="$t('projects.lxcIdMapper.mapping.table.placeholder', [1000])" class="h-10 border mt-1 rounded border-gray:10 bg-gray:10 px-4 w-full placeholder:color-gray:40 outline-none">
          </td>
          <td>
            <input v-model="item.hostId" type="number" :placeholder="$t('projects.lxcIdMapper.mapping.table.placeholder', [1005])" class="h-10 border mt-1 rounded border-gray:10 bg-gray:10 px-4 w-full placeholder:color-gray:40 outline-none">
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="map.subId.length">
      <h2>{{ $t('projects.lxcIdMapper.instructions.title') }}</h2>
      <p>1. {{ $t('projects.lxcIdMapper.instructions.add') }} <code>/etc/pve/lxc/%id%.conf</code>:</p>
      <pre><code>{{ map.idMap }}</code></pre>

      <p>2. {{ $t('projects.lxcIdMapper.instructions.add') }} <code>/etc/subuid</code>:</p>
      <pre><code>{{ map.subId }}</code></pre>

      <p>3. {{ $t('projects.lxcIdMapper.instructions.add') }} <code>/etc/subgid</code>:</p>
      <pre><code>{{ map.subId }}</code></pre>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { type MapperMatch, mapper } from 'lxc-idmapper'

  type MapperMatchNullable = { [P in keyof MapperMatch]: MapperMatch[P] | null }

  const { query } = useLocaleContent()

  const items = ref<MapperMatchNullable[]>([
    { containerId: null, hostId: null },
  ])

  const countEmptyItems = computed(() => items.value.filter((item) => !item.containerId && !item.hostId).length)

  watch(items, (newItems) => {
    if (newItems.length > 0 && newItems[newItems.length - 1].containerId !== null && newItems[newItems.length - 1].hostId !== null) {
      items.value.push({ containerId: null, hostId: null })
    }

    if (countEmptyItems.value >= 2) {
      items.value = items.value
        .filter((item) => item.containerId || item.hostId)
        .concat({ containerId: null, hostId: null })
    }
  }, { deep: true })

  const map = computed(() => {
    const matches: MapperMatch[] = items.value
      .map((item) => ({
        containerId: item.containerId || 0,
        hostId: item.hostId || 0,
      }))
      .filter((item) => item.containerId && item.hostId)

    try {
      const result = mapper(matches)

      return {
        idMap: result.idMap.reduce<string[]>((acc, item) => {
          acc.push(...[
            `lxc.idmap: u ${item}`,
            `lxc.idmap: g ${item}`,
          ])

          return acc
        }, []).join('\n'),
        subId: result.subId.join('\n'),
      }
    } catch (error) {
      console.error(error)
    }

    return {
      idMap: [],
      subId: [],
    }
  })
</script>
