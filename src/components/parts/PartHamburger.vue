<template>
    <span class="hamburger" :class="isActive ? 'is-active' : ''" @click="clickSubmit">
        <span></span>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props: {
            isActive: {
                type: Boolean,
                required: true
            },
            onClick: Function
        },

        methods: {
            clickSubmit(): void {
                this.onClick();
            }
        }
    });
</script>

<style lang="scss" scoped>
    .hamburger {
        display: block;
        cursor: pointer;
        width: 30px;
        height: 19px;
        position: relative;

        &::after,
        &::before,
        span {
            width: 100%;
            height: 3px;
            position: absolute;
            display: block;
            background-color: $white;
        }

        &::after,
        &::before {
            content: '';
            transition: $dur width $dur $ease;
        }

        &::after {
            top: 0;
            left: 0;
        }

        &::before {
            bottom: 0;
            right: 0;
        }

        span {
            top: 50%;
            margin-top: -1.5px;
            transition: transform $dur $ease;

            &::before {
                content: '';
                background-color: $white;
                width: 100%;
                height: 3px;
                position: absolute;
                left: 0;
                z-index: 1;
                transition: transform $dur $ease;
            }
        }

        &.is-active {
            &::after,
            &::before {
                transition: $dur $ease;
                width: 0;
            }

            &::after {
                left: 0;
            }

            &::before {
                right: 0;
            }

            span {
                transform: rotate(45deg);
                transition: $dur transform $dur $ease;

                &::before {
                    transform: rotate(-90deg);
                    transition: $dur transform $dur $ease;
                }
            }
        }
    }
</style>
