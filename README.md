# Heart Equation Visualization  
  
This project visualizes a heart-shaped mathematical equation using HTML5 Canvas and JavaScript.  
  
## Formula Used  
  
The heart shape is generated using the following equation:  
  
$$  
y = |x|^{\frac{2}{3}} + 0.9 \sqrt{|x| k} \sqrt{3 - x^2}  
$$  
  
Where:  
  
- `x` is the horizontal coordinate.  
- `k` is an animated parameter that affects the wave pattern within the heart.  
- The first term `|x|^(2/3)` defines the basic heart curve.  
- The second term `0.9 sqrt(|x| * k) sqrt(3 - x^2)` adds oscillations for a dynamic effect. 
  
## Features  
  
- Animated heart shape with a dynamic `k`-value.  
- Real-time rendering using the HTML5 Canvas API.  
- Smooth transitions using the `requestAnimationFrame` loop.  
  
## Installation & Usage  
  
1. Clone this repository:  
  
   ```bash  
   git clone https://github.com/yourusername/Heart-Equation.git  
   cd Heart-Equation
