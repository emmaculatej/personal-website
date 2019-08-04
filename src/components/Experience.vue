<template>
<div class="card">
    <h4 class="experienceHeader"> Experience </h4>
    <div class="timeline">
        <div v-for="work in workExperience" v-bind:key="work.id" :class="{'container right': work.id % 2 === 0, 'container left': work.id % 2 !== 0 }">
                <div class="content">
                <h5 :class="{'text-align': work.id % 2 === 0 ? 'right' : 'left'}" style="font-size: 30px; display: inline;"> {{work.name}} </h5>
                <div>
                <span><b> {{work.startDate}} - {{work.endDate}}</b></span>
                </div>
                    <div>
                        <span>{{work.description}}</span>
                    </div>
                </div>
        </div>
    </div>
    <div class="text-center" style="padding-top: 5%;">
    <a href="https://uk.linkedin.com/in/emmaculate-jeyarajah" class="btn btn-lg" style="background-color: coral;"> More Information </a>
    </div>
</div>

</template>

<script>
export default {
    name: 'Experience',
    data: function () {
        return {
            workExperience : [
                {id: 1, name: 'DCSL Software Ltd', role: 'Junior Developer', startDate: 'February 2019', endDate: 'Present', location: 'London', description: 
                'I initially joined the company in the latter half of my final year at university and became a full-time Junior Developer in July 2019.'},
                {id: 2, name: 'ITM Limited', role: 'Junior Developer and Calculations Developer', startDate: 'September 2017', endDate: 'February 2018', location: 'London/Guildford', description: 'On my placement year, I worked as a Junior Developer. I then continued to work for ITM during my first half of final year at university as Calculations Developer.'},
                {id: 3, name: "Sainsbury's", role: 'Customer Service Assistant', startDate: 'September 2016', endDate: 'August 2017', location: 'Raynes Park', description: 'Whilst studying for my second year, I worked part-time at this branch.'},
            ]
        }
    }
}
</script>

<style scoped>

span {
  font-size: 18px;
}

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
  width: 45%;
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
  left: -22.5%;
}

/* Place the container to the right */
.right {
  left: 22.5%;
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