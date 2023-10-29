function sortColors(colors){
    let i = 0, j = 0, n = colors.length - 1;
    let p = 1;

    while(j <= n){
        if(colors[j] < p){
            swap(colors, i, j);
            i++;
            j++;
        }else if(colors[j] > p){
            swap(colors, j, n);
            n--;
        }else{
            j++;
        }
    }

    // return 
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function main(){
    let colors = [1, 1, 1, 2, 2, 0, 2, 0];
    sortColors(colors);
    console.log(colors);
}

main();
