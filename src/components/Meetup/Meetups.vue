<template>
  <v-container>
    <v-layout row warp>
      <v-flex xs12 sm10 md10 offset-sm1 offset-md1>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src='https://upload.wikimedia.org/wikipedia/commons/1/18/Hong_Kong_Night_Skyline.jpg'
                  height="125px"
                ></v-card-media>
              </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h5 class="white--text mb-0">HK Meetup</h5>
                  <div>05 August 2017</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat>
                  <v-icon left light>arrow_forward</v-icon>Meetup
                </v-btn>
              </v-card-actions>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
