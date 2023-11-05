function maxArea(height){
    let left = 0, right = height.length - 1;
    let area = 0;

    while(left < right){
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let maxine = h * w;
        area = Math.max(area, maxine);

        if(height[left] < height[right]) left++;
        else if(height[left] > height[right]) right--;
        else {
            left++;
            right--;
        }
    }

    return area;
}

function main(){
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    let area = maxArea(height);
    console.log(area);
}

main();