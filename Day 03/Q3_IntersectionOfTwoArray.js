function intersectionOfArray(nums1, nums2){
    let map = new Map();

    for(let i = 0; i < nums1.length; i++){
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
    }

    console.log(map);
    
    let intersect = [];
    for(let i = 0; i < nums2.length; i++){
        if(map.has(nums2[i])){
            map.set(nums2[i], map.get(nums2[i]) - 1);
            intersect.push(nums2[i]);
        }
        if(map.get(nums2[i]) === 0){
            map.delete(nums2[i]);
        }
    }
    console.log(map);

    return intersect.sort((a,b) => (a-b));
}

function main(){
    let nums1 = [1, 2, 1, 1, 2];
    let nums2 = [2, 2, 2, 1];
    let res = intersectionOfArray(nums1, nums2);
    console.log('Intersection of two arrays are:', res);
}

main();