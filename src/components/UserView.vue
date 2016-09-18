<template>
    <div class="user-view">
        <div v-if="$loadingRouteData">Loading</div>
        <div v-if="!$loadingRouteData">
            <ul>
                <li><span class="label">user:</span>{{user.id}}</li>
                <li><span class="label">created:</span>{{user.created | fromNow}} ago</li>
                <li><span class="label">karma:</span>{{user.karma}}</li>
                <li><span class="label" v-if="user.about">about:</span>
                    {{{user.about}}}
                </li>
            </ul>

        </div>

    </div>
</template>
<script>
    import store from '../store'

    export default{
        name: 'UserView',

        data(){
            return {
                user: {}
            }
        },

        route: {
            data({to:{params:{id}}}){
                return {
                    user: store.fetchUser(id)
                }
            }
        }


    }

</script>
<style lang="stylus">
    @import "../variables.styl"

    .user-view
        color $gray
        li
            margin 5px 0
        .label
            display inline-block
            min-width 60px
        .about
            margin-top 1em
        .links a
            text-decoration underline

</style>
