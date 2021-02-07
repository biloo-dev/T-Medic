<style>
#product-profile-view .v-dialog {
  overflow: visible !important;
}
</style>
<template>
<v-container id="product-profile-view" fluid tag="section">
  <v-row justify="center">
    <v-col cols="12">
      <template>
        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
          <template v-slot:top>
             <material-card color="accent" icon="mdi-account-group-outline">
              <template #title> 
              <div class="pa-4 white--text">
                <div class="text-h2 font-weight-light text-center">
                  <strong class="mr-1 font-weight-black">{{ $t('product') }} </strong> 
                  <v-btn color="primary" class="float-right mb-2" dark @click="dialog=true">
                    {{ $t('Newproduct') }} <v-icon>mdi-plus</v-icon>
                  </v-btn>   
                </div>
              </div>
            </template>
            </material-card> 
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </template>
    </v-col>
  </v-row>
  <v-dialog v-model="dialog" style="overflow-y: visible !important;background:#333" class="pa-4" max-width="500px">

    <material-card color="primary" full-header>
      <template #heading>
        <div class="pa-4 white--text">
          <div class="text-h2 font-weight-light text-center">
            Add New — <strong class="">product</strong>
          </div>
        </div>

      </template>

      <v-form>
        <v-container class="py-0">
          <v-row>
            <v-col cols="5" offset="3" class="text-center">
              <v-card class="rounded-circle" @click="addImg">
                <v-avatar class="rounded-circle" size="180">
                  <v-img src="@/assets/logo.png" />
                </v-avatar>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.productname" hide-details="auto" dense label="product Name" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.email" hide-details="auto" dense label="Email Address" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.firstName" hide-details="auto" dense label="First Name" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.lastName" hide-details="auto" dense label="Last Name" />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.password" hide-details="auto" dense label="Password" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="editproduct.confirmPassword" hide-details="auto" dense label="Confirm Password" />
            </v-col>

            <v-col cols="12" class="text-right">
              <v-btn :color="editedIndex === -1 ? 'primary' : 'success'" min-width="150">
                {{ formTitle }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </material-card>
  </v-dialog>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [{
        text: 'id',
        sortable: false,
        value: 'id',
      },
      {
        text: 'productname',
        align: 'start',
        value: 'productname'
      },
      {
        text: 'firstName',
        align: 'start',
        value: 'firstName'
      },
      {
        text: 'lastName',
        align: 'start',
        value: 'lastName'
      },
      {
        text: 'E-mail',
        value: 'email'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      },
    ],
    desserts: [],
    editedIndex: -1,
    editproduct: {
      productname: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    defaultproduct: {
      productname: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? this.$t('Newproduct') : this.$t('Editproduct')
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [{
          id: 159,
          productname: 'Frozen Yogurt',
          firstName: 6.0,
          lastName: 24,
          email: 4.0,
        },
        {
          id: 237,
          productname: 'Ice cream sandwich',
          firstName: 9.0,
          lastName: 37,
          email: 4.3,
        },
        {
          id: 262,
          productname: 'Eclair',
          firstName: 16.0,
          lastName: 23,
          email: 6.0,
        },
        {
          id: 305,
          productname: 'Cupcake',
          firstName: 3.7,
          lastName: 67,
          email: 4.3,
        },
        {
          id: 356,
          productname: 'Gingerbread',
          firstName: 16.0,
          lastName: 49,
          email: 3.9,
        },
        {
          id: 375,
          productname: 'Jelly bean',
          firstName: 0.0,
          lastName: 94,
          email: 0.0,
        },
        {
          id: 392,
          productname: 'Lollipop',
          firstName: 0.2,
          lastName: 98,
          email: 0,
        },
        {
          id: 408,
          productname: 'Honeycomb',
          firstName: 3.2,
          lastName: 87,
          email: 6.5,
        },
        {
          id: 452,
          productname: 'Donut',
          firstName: 25.0,
          lastName: 51,
          email: 4.9,
        },
        {
          id: 518,
          productname: 'KitKat',
          firstName: 26.0,
          lastName: 65,
          email: 7,
        },
      ]
    },

    addImg() {
      alert('oky oky')
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editproduct = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editproduct = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editproduct = Object.assign({}, this.defaultproduct)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editproduct = Object.assign({}, this.defaultproduct)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editproduct)
      } else {
        this.desserts.push(this.editproduct)
      }
      this.close()
    },
  },
}
</script>
