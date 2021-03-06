import Vue from 'vue';

const margin = Vue.directive('margin', {
    inserted: function (el, binding) {
        switch (binding.arg) {
            case "left":
                el.style.marginLeft = binding.value + "px";
                break;
            case "right":
                el.style.marginRight = binding.value + "px";
                break;
            case "top":
                el.style.marginTop = binding.value + "px";
                break;
            case "bottom":
                el.style.marginBottom = binding.value + "px";
                break;
            default:
                el.style.margin = binding.value + "px";
                break;
        }
    }
})

const padding = Vue.directive('padding', {
    inserted: function (el, binding) {
        switch (binding.arg) {
            case "left":
                el.style.paddingLeft = binding.value + "px";
                break;
            case "right":
                el.style.paddingRight = binding.value + "px";
                break;
            case "top":
                el.style.paddingTop = binding.value + "px";
                break;
            case "bottom":
                el.style.paddingBottom = binding.value + "px";
                break;
            default:
                el.style.padding = binding.value + "px";
                break;
        }
    }
})

const radius = Vue.directive('radius', {
    inserted: function (el, binding) {
        el.style.borderRadius = binding.value + "px";
    }
})

const color = Vue.directive('color', {
    inserted: function (el, binding) {
        el.style.color = binding.value;
    }
})

const backgroundColor = Vue.directive('bg-color', {
    inserted: function (el, binding) {
        switch (binding.arg) {
            case "white":
                el.style.backgroundColor = "#fff";
                break;
            default:
                el.style.backgroundColor = binding.value;
                break;
        }
    }
})

const fontSize = Vue.directive('fontsize', {
    inserted: function (el, binding) {
        el.style.fontSize = binding.value + "px";
    }
})


export default { margin, color, padding, radius, backgroundColor };