<template>
  <div class="min-h-screen bg-[#1F1F1F] font-poppins  flex flex-col">
    <div class="flex-grow pt-36 pb-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">Bulletin Board</h1>
          <p class="text-gray-400 text-lg">Stay updated with the latest company news, events, and announcements.</p>
        </div>

        <!-- Filters (Mock) -->
        <div class="flex justify-center mb-10 space-x-4 animate-fade-in-up" style="animation-delay: 0.1s;">
          <button 
             v-for="filter in ['All', 'Events', 'Announcements', 'Maintenance']" 
             :key="filter"
             @click="activeFilter = filter"
             :class="['px-6 py-2 rounded-full border transition', activeFilter === filter ? 'bg-[#d4a017] border-[#d4a017] text-black font-bold' : 'border-gray-600 text-gray-400 hover:border-[#d4a017] hover:text-[#d4a017]']"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Bulletin Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(item, index) in filteredBulletins" 
            :key="item.id"
            class="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-500/50 transition duration-300 group animate-fade-in-up"
            :style="{ animationDelay: `${index * 0.1 + 0.2}s` }"
          >
            <!-- Date Badge -->
            <div class="relative">
               <div class="h-48 bg-gray-700 w-full object-cover overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
               </div>
               <div class="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center border border-gray-600">
                 <p class="text-xs text-gray-400 uppercase">{{ item.month }}</p>
                 <p class="text-xl font-bold text-[#d4a017]">{{ item.day }}</p>
               </div>
            </div>

            <div class="p-6">
               <div class="flex items-center space-x-2 mb-3">
                 <span :class="['text-xs px-2 py-1 rounded border uppercase tracking-wider', getTypeClass(item.type)]">{{ item.type }}</span>
                 <span class="text-xs text-gray-500">{{ item.time }}</span>
               </div>
               
               <h3 class="text-xl font-bold mb-3 group-hover:text-[#d4a017] transition">{{ item.title }}</h3>
               <p class="text-gray-400 text-sm leading-relaxed mb-4">
                 {{ item.description }}
               </p>
               
               <div class="flex items-center space-x-2 text-sm text-gray-500 border-t border-gray-700 pt-4">
                 <div class="w-6 h-6 rounded-full bg-gray-600"></div>
                 <span>Posted by {{ item.author }}</span>
               </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-if="filteredBulletins.length === 0" class="text-center py-20">
          <p class="text-gray-500 text-lg">No bulletins found for this category.</p>
        </div>

      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: "BulletinView",
  components: {
    PageFooter
  },
  data() {
    return {
      activeFilter: 'All',
      bulletins: []
    };
  },
  computed: {
    filteredBulletins() {
      if (this.activeFilter === 'All') return this.bulletins;
      return this.bulletins.filter(b => b.type === this.activeFilter);
    }
  },
  mounted() {
    this.fetchBulletins();
  },
  methods: {
    async fetchBulletins() {
      try {
        const response = await fetch('http://localhost:3000/announcements');
        const data = await response.json();
        
        // Transform data
        this.bulletins = data.map(b => {
             const d = new Date(b.date_event);
             return {
                 id: b.id,
                 title: b.title,
                 description: b.description,
                 type: b.type,
                 date: b.date_event,
                 month: d.toLocaleString('default', { month: 'short' }),
                 day: d.getDate(),
                 time: b.time_event,
                 author: b.author,
                 image: b.image_url
             };
        });
      } catch (error) {
        console.error("Failed to fetch bulletins", error);
      }
    },
    getTypeClass(type) {
      switch(type) {
        case 'Events': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
        case 'Maintenance': return 'bg-red-500/10 text-red-400 border-red-500/20';
        case 'Announcements': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
        default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      }
    }
  }
};
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
