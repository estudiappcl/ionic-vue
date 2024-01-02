<template>
    <base-layout page-title="Lista de Productos">
        <ion-list v-for="product in products" :key="product.pro_id">
            <ion-card :router-link="'/products/'+product.pro_id" >
              

                <ion-card-header>
                    <ion-card-title>{{ product.pro_nombre }}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <p><strong>ID:</strong> {{ product.pro_id }}</p>
                    <p><strong>Descripción:</strong> {{ product.pro_descripcion }}</p>
                    <p><strong>Stock:</strong> {{ product.pro_stock }}</p>
                    <p><strong>Precio:</strong> {{ product.pro_precio }}</p>
                    <p><strong>Proveedor:</strong> {{ product.pro_proveedor }}</p>
                </ion-card-content>
            </ion-card>
        </ion-list>
    </base-layout>
</template>


<script>
import { IonList, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'

import Airtable from 'airtable';

var base = new Airtable({
    apiKey:
        "patI4jcUevkSywSJ1.2d474678cb2a772bff1a52df8047be979fa9d3f77cd62bfb4da10256152d8007",
}).base("appWYcqn38utQbdcA");

export default {

    data() {
        return {
            products: []
        };
    },
    async created() {
        try {
            const records = await base('Producto').select().all();
            this.products = records.map(record => record.fields);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    components: {
        IonList,
        IonCard,
        IonCardContent, IonCardHeader, IonCardTitle
    },

}
</script>


