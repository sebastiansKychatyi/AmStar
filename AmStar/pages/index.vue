<template>
    <div>
        <Navbar />
        <PlayerRatingTable />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script>
import PlayerRatingTable from '~/components/PlayerRatingTable.vue';

export default {
components: {
    PlayerRatingTable
}
};

</script>