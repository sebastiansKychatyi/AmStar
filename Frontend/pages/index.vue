<template>
    <Navbar />
    <div id="app">
        <PlayerRatingTable />
    </div>
    <Footer />
</template>

<script>
import PlayerRatingTable from '@/components/PlayerRatingTable.vue';
import navbar from '~/components/navbar.vue';
export default {
    components: {
        PlayerRatingTable,
    },
};
</script>
