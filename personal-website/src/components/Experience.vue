<template>
<div class="card">
    <h4 class="experienceHeader"> Experience </h4>
    <div class="timeline">
        <div v-for="work in workExperience" v-bind:key="work.id" :class="{'container right': work.id % 2 === 0, 'container left': work.id % 2 !== 0 }">
                <div class="content">
                <h5> {{work.name}} </h5>
                <span> {{work.startDate}} - {{work.endDate}}</span>
                    <div>
                        <span>{{work.description}}</span>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Experience',
    data: function () {
        return {
            workExperience : [
                {id: 1, name: 'Work1', startDate: '01/01/1990', endDate: '02/01/1990', location: '', description: 'This is a secret message.'},
                {id: 2, name: 'Work2', startDate: '01/01/1990', endDate: '02/01/1990', location: '', description: 'This is a secret message.'},
                {id: 3, name: 'Work3', startDate: '01/01/1990', endDate: '02/01/1990', location: '', description: 'This is a secret message.'},
                {id: 4, name: 'Work4', startDate: '01/01/1990', endDate: '02/01/1990', location: '', description: 'This is a secret message.'},
                {id: 5, name: 'Work5', startDate: '01/01/1990', endDate: '02/01/1990', location: '', description: 'This is a secret message.'}
            ]
        }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  font-family: Verdana, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  padding-top: 3%;
  padding-bottom: 3%;
  position: relative;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 10px;
  background-color: coral;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: 0px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 30%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid coral;
  top: 15px;
  border-radius: 50%;
  z-index: 1;  
}

/* Place the container to the left */
.left {
  left: -15%;
}

/* Place the container to the right */
.right {
  left: 15%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid coral;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent coral;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid coral;
  border-width: 10px 10px 10px 0;
  border-color: transparent coral transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -8px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  border: medium solid coral;
  position: relative;
}

.experienceHeader{
  padding-bottom: 3%;
  font-size: 250%;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 25px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid coral;
  border-width: 10px 10px 10px 0;
  border-color: transparent coral transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 17px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>