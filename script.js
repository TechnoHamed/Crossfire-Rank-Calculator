const levels = [
    { level: 1, name: "Trainee 1", exp: 1 },
    { level: 2, name: "Trainee 2", exp: 457 },
    { level: 3, name: "Private", exp: 913 },
    { level: 4, name: "Private First Class", exp: 1825 },
    { level: 5, name: "Corporal", exp: 3193 },
    { level: 6, name: "Sergeant 1", exp: 5017 },
    { level: 7, name: "Sergeant 2", exp: 7297 },
    { level: 8, name: "Sergeant 3", exp: 10033 },
    { level: 9, name: "Sergeant 4", exp: 13225 },
    { level: 10, name: "Staff Sergeant 1", exp: 17785 },
    { level: 11, name: "Staff Sergeant 2", exp: 23941 },
    { level: 12, name: "Staff Sergeant 3", exp: 33061 },
    { level: 13, name: "Staff Sergeant 4", exp: 43093 },
    { level: 14, name: "Staff Sergeant 5", exp: 54037 },
    { level: 15, name: "Staff Sergeant 6", exp: 65893 },
    { level: 16, name: "Sergeant First Class 1", exp: 78661 },
    { level: 17, name: "Sergeant First Class 2", exp: 92341 },
    { level: 18, name: "Sergeant First Class 3", exp: 106933 },
    { level: 19, name: "Sergeant First Class 4", exp: 122437 },
    { level: 20, name: "Sergeant First Class 5", exp: 138853 },
    { level: 21, name: "Sergeant First Class 6", exp: 156181 },
    { level: 22, name: "Master Sergeant 1", exp: 174421 },
    { level: 23, name: "Master Sergeant 2", exp: 193573 },
    { level: 24, name: "Master Sergeant 3", exp: 213637 },
    { level: 25, name: "Master Sergeant 4", exp: 234613 },
    { level: 26, name: "Master Sergeant 5", exp: 256501 },
    { level: 27, name: "Master Sergeant 6", exp: 279301 },
    { level: 28, name: "Second Lieutenant 1", exp: 326725 },
    { level: 29, name: "Second Lieutenant 2", exp: 375973 },
    { level: 30, name: "Second Lieutenant 3", exp: 427045 },
    { level: 31, name: "Second Lieutenant 4", exp: 479941 },
    { level: 32, name: "Second Lieutenant 5", exp: 534661 },
    { level: 33, name: "Second Lieutenant 6", exp: 591205 },
    { level: 34, name: "Second Lieutenant 7", exp: 649573 },
    { level: 35, name: "Second Lieutenant 8", exp: 709765 },
    { level: 36, name: "First Lieutenant 1", exp: 771781 },
    { level: 37, name: "First Lieutenant 2", exp: 835621 },
    { level: 38, name: "First Lieutenant 3", exp: 901285 },
    { level: 39, name: "First Lieutenant 4", exp: 968773 },
    { level: 40, name: "First Lieutenant 5", exp: 1038085 },
    { level: 41, name: "First Lieutenant 6", exp: 1109221 },
    { level: 42, name: "First Lieutenant 7", exp: 1182181 },
    { level: 43, name: "First Lieutenant 8", exp: 1256965 },
    { level: 44, name: "Captain 1", exp: 1333573 },
    { level: 45, name: "Captain 2", exp: 1412005 },
    { level: 46, name: "Captain 3", exp: 1492261 },
    { level: 47, name: "Captain 4", exp: 1574341 },
    { level: 48, name: "Captain 5", exp: 1658245 },
    { level: 49, name: "Captain 6", exp: 1743973 },
    { level: 50, name: "Captain 7", exp: 1831525 },
    { level: 51, name: "Captain 8", exp: 1920901 },
    { level: 52, name: "Major 1", exp: 2057701 },
    { level: 53, name: "Major 2", exp: 2107237 },
    { level: 54, name: "Major 3", exp: 2339509 },
    { level: 55, name: "Major 4", exp: 2484517 },
    { level: 56, name: "Major 5", exp: 2632261 },
    { level: 57, name: "Major 6", exp: 2782741 },
    { level: 58, name: "Major 7", exp: 2935957 },
    { level: 59, name: "Major 8", exp: 3091909 },
    { level: 60, name: "Lieutenant Colonel 1", exp: 3277045 },
    { level: 61, name: "Lieutenant Colonel 2", exp: 3465373 },
    { level: 62, name: "Lieutenant Colonel 3", exp: 3673537 },
    { level: 63, name: "Lieutenant Colonel 4", exp: 3885178 },
    { level: 64, name: "Lieutenant Colonel 5", exp: 4100296 },
    { level: 65, name: "Lieutenant Colonel 6", exp: 4318891 },
    { level: 66, name: "Lieutenant Colonel 7", exp: 4540963 },
    { level: 67, name: "Lieutenant Colonel 8", exp: 4766512 },
    { level: 68, name: "Colonel 1", exp: 5028199 },
    { level: 69, name: "Colonel 2", exp: 5319184 },
    { level: 70, name: "Colonel 3", exp: 5614501 },
    { level: 71, name: "Colonel 4", exp: 5914150 },
    { level: 72, name: "Colonel 5", exp: 6218131 },
    { level: 73, name: "Colonel 6", exp: 6526501 },
    { level: 74, name: "Colonel 7", exp: 6839203 },
    { level: 75, name: "Colonel 8", exp: 7156237 },
    { level: 76, name: "Brigadier General 1", exp: 7578037 },
    { level: 77, name: "Brigadier General 2", exp: 8026912 },
    { level: 78, name: "Brigadier General 3", exp: 8481772 },
    { level: 79, name: "Brigadier General 4", exp: 8964562 },
    { level: 80, name: "Brigadier General 5", exp: 9475852 },
    { level: 81, name: "Brigadier General 6", exp: 10016212 },
    { level: 82, name: "Major General 1", exp: 10586212 },
    { level: 83, name: "Major General 2", exp: 11186422 },
    { level: 84, name: "Major General 3", exp: 11817412 },
    { level: 85, name: "Major General 4", exp: 12479752 },
    { level: 86, name: "Major General 5", exp: 13174012 },
    { level: 87, name: "Major General 6", exp: 13900762 },
    { level: 88, name: "Lieutenant General 1", exp: 14660572 },
    { level: 89, name: "Lieutenant General 2", exp: 15454012 },
    { level: 90, name: "Lieutenant General 3", exp: 16281652 },
    { level: 91, name: "Lieutenant General 4", exp: 17144062 },
    { level: 92, name: "Lieutenant General 5", exp: 18041812 },
    { level: 93, name: "Lieutenant General 6", exp: 18975472 },
    { level: 94, name: "General 1", exp: 19945612 },
    { level: 95, name: "General 2", exp: 20952802 },
    { level: 96, name: "General 3", exp: 21997612 },
    { level: 97, name: "General 4", exp: 23080612 },
    { level: 98, name: "General 5", exp: 24202372 },
    { level: 99, name: "General 6", exp: 25363462 },
    { level: 100, name: "Marshall", exp: 26564452 },
    { level: 101, name: "Marshall Lv1", exp: 51042968 },
    { level: 102, name: "Marshall Lv2", exp: 75521484 },
    { level: 103, name: "Marshall Lv3", exp: 99999999 },
    { level: 104, name: "Grand Marshall", exp: 100000000 },
    { level: 105, name: "Honor Marshall", exp: 109999999 },
];


document.addEventListener("DOMContentLoaded", () => {
    const rankSelect = document.getElementById("rankSelect");

    // ملء قائمة الخيارات بالمستويات
    levels.forEach(level => {
        const option = document.createElement("option");
        option.value = level.level;
        option.innerHTML = `Level ${level.level}: ${level.name}`;
        rankSelect.appendChild(option);
    });

    // إضافة خيار "Custom EXP" كآخر عنصر في القائمة
    const customOption = document.createElement("option");
    customOption.value = "custom";
    customOption.innerHTML = "Custom EXP";
    customOption.style.color = "red"; // تغيير لون النص ليكون مميزًا
    rankSelect.appendChild(customOption);
});

// دالة لحساب المستوى الحالي والنقاط المتبقية
function calculateRank() {
    const exp = parseInt(document.getElementById("expInput").value);
    if (isNaN(exp)) {
        document.getElementById("result").innerHTML = "<p>Please enter a valid EXP.</p>";
        return;
    }

    let currentRank = levels[0];
    let nextRank = levels[1];

    for (let i = 0; i < levels.length; i++) {
        if (exp >= levels[i].exp) {
            currentRank = levels[i];
            nextRank = levels[i + 1] || { name: "Max Rank", level: "N/A", exp: "99999999" };
        }
    }

    document.getElementById("result").innerHTML = `
        <h3>Current Rank: ${currentRank.name} (Level: ${currentRank.level})</h3>
        <img src="assets/imgs/CF Rank/rank_${currentRank.level}.jpg" alt="${currentRank.name}">
        <h4>Next Rank: ${nextRank.name} (Level: ${nextRank.level})</h4>
        <img src="assets/imgs/CF Rank/rank_${nextRank.level}.jpg" alt="${nextRank.name}">
        <p>EXP required to next rank: ${(nextRank.exp - exp).toLocaleString()} EXP</p>
    `;
}



// دالة لمقارنة المستويات
function compareRanks() {
    const exp = parseInt(document.getElementById("expInput").value);
    const selectedLevel = document.getElementById("rankSelect").value;
    
    // في حالة تم اختيار "Custom EXP"
    if (selectedLevel === "custom") {
        document.querySelector(".custom-exp-group").style.display = "flex";
        
        const customExp = parseInt(document.getElementById("customExpInput").value);
        
        if (isNaN(customExp)) {
            document.getElementById("comparisonResult").innerHTML = "<p>Please enter a valid custom EXP.</p>";
            return;
        }

        const difference = customExp - exp;
        document.getElementById("comparisonResult").innerHTML = `
            <h3>Comparison with: Custom EXP</h3>
            <p>EXP difference to custom target: ${difference.toLocaleString()} EXP</p>
        `;
    } else {
        // إخفاء حقل إدخال "Custom EXP" عند اختيار مستوى عادي
        document.querySelector(".custom-exp-group").style.display = "none";

        const targetRank = levels.find(lvl => lvl.level == selectedLevel);

        if (targetRank) {
            const difference = targetRank.exp - exp;
            document.getElementById("comparisonResult").innerHTML = `
                <h3>Comparison with: ${targetRank.name} (Level: ${targetRank.level})</h3>
                <img src="assets/imgs/CF Rank/rank_${targetRank.level}.jpg" alt="${targetRank.name}">
                <p>EXP difference to ${targetRank.name}: ${difference.toLocaleString()} EXP</p>
            `;
        } else {
            document.getElementById("comparisonResult").innerHTML = `<p>Rank not found!</p>`;
        }
    }
}


// ===========================================




