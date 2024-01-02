<template>
    <base-layout page-title="Detalles del producto" page-default-back-link="/products">
        <ion-card v-if="product">
            <ion-card-header>
                <ion-card-title>{{ product.pro_nombre }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p><strong>ID:</strong> {{ product.pro_id }}</p>
                <p><strong>Descripción:</strong> {{ product.pro_descripcion }}</p>
                <p><strong>Stock:</strong> {{ product.pro_stock }}</p>
                <p><strong>Precio:</strong> {{ product.pro_precio }}</p>
                <p><strong>Proveedor:</strong> {{ product.pro_proveedor }}</p>
                <ion-input label="Cantidad" type="number" placeholder="000"></ion-input>
                <ion-button class="ion-align-self-center">
                    comprar
                </ion-button>
            </ion-card-content>

        </ion-card>

        <div v-else>
            <p>Loading...</p>
        </div>
    </base-layout>
</template>
  
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonInput } from '@ionic/vue'
import Airtable from 'airtable';

var base = new Airtable({
    apiKey: "patI4jcUevkSywSJ1.2d474678cb2a772bff1a52df8047be979fa9d3f77cd62bfb4da10256152d8007",
}).base("appWYcqn38utQbdcA");

export default {
    data() {
        return {
            product: null
        };
    },
    async created() {
        const productId = this.$route.params.id;
        try {
            base('Producto').select({
                filterByFormula: `{pro_id} = "${productId}"`
            }).firstPage((err, records) => {
                if (err) {
                    console.error(err);
                    return;
                }
                this.product = records[0].fields;
                // if (records.length > 0) {

                // } else {
                //     console.log('No product found with the specified pro_id.');
                // }
            });
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    },
    components: {
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonButton,
        IonInput
    }
}
</script>
