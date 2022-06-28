<template>
    <div>
        <section id="reviews">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Отзывы клиентов Generalboats</h2>
                    </div>
                </div>
                <div class="row" v-if="reviews.length">
                    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
                        <swiper-slide v-for="review in reviews">
                            <div class="review-box">
                            <p class="white-txt">{{review.date}}</p>
                            <h3>{{review.fio}}</h3>
                            <p class="review-txt">{{review.text}}</p>
                            <div class="rate">
                                <span class="rate-index" :style="{'width': (100/5 *parseFloat(review.rating)) + '%'}"></span>
                                <img src="../assets/img/rate.svg" alt="">
                            </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <button class="order2" @click="popReview = true">Написать отзыв</button>
                        </div>
                    </div>
            </div>
        </section>

        <div class="pop-review" v-if="popReview" @click="popReview = false">
            <div class="pop-box" @click.stop>
                <div class="cross" @click="popReview = false">✕</div>
                <h4 class="text-center">Оставить отзыв</h4>
                <form @submit.prevent="submitReview()">
					<div class="col-lg-12">
						<input type="text" placeholder="Имя" v-model="name">
					</div>
                    <div class="col-lg-12">
                        <label for="">Лодка</label>
                        <select v-model="lodka">
                            <option value="boat.id" v-for="boat in boatsList">{{boat.title.rendered}}</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <textarea placeholder="Отзыв" v-model="review"></textarea>
                    </div>
                   <div class="col-lg-12">
                       <label for="">Оценка: <strong>{{rating}}</strong></label>
                        <input type="range" v-model="rating" max="5" min="0" step="0.5"
                        :style="{'background-size' : (100/5 *parseFloat(rating)) + '%' }">
                   </div>
					
					<div class="col-lg-12 text-center">
						<input type="submit">
					</div>
				</form>
            </div>
        </div>

        
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapState} from 'vuex'


    export default{
        computed: {
            ...mapGetters({
                reviews: "goods/getReviews",
            }),
            ...mapState('goods', ['boatsList']),
        },
        methods: {
            submitReview(){
                let otzyv = {
                    fio: this.name,
                    boat: this.lodka,
                    text: this.review,
                    rating: this.rating
                }

                axios
                .post('https://generalboats.ru/wp-json/gb/v1/create/review', otzyv)
                .then(res => {
                    console.log(res.data)
                    this.popReview = false
                    this.$store.dispatch('goods/loadReviews')
                    ym(89343131,'reachGoal','zayavka')
                })
            }
        },
        data(){
            return{
                popReview: false,
                rating: 4.5,
                name: '',
                review: '',
                lodka: '',
                swiperOptions: {
			        slidesPerView: 3,
			        spaceBetween: 30,
			        draggable: true,
                    loop: true,
			        autoplay: {
			        delay: 1500,
			            disableOnInteraction: false,
			        },
                    breakpoints: {
			            320: {
			              slidesPerView: 1.3,
			              spaceBetween: 10,
                          freeMode: true,
                          threshold: 10,
			              touchRatio: 1,
                          centeredSlides: true
			            },
			            768: {
				            slidesPerView: 2,
				            touchRatio: 1,
				        },
				        1150: {
				          slidesPerView: 3,
				          spaceBetween: 30,
				           touchRatio: 1,
				        }
			        }
			    }
            }
        }
    }
</script>



