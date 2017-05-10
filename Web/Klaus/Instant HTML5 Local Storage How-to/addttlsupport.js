    function saveInfo() {    
        try {
            $.jStorage.set("name", $("#name").val());
            $.jStorage.set("age", $("#age").val());
            $("#name").val("");
            $("#age").val("");
            $.jStorage.setTTL("name", 30000);
        }
        catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log("Error: Local Storage limit exceeds.");
            }
            else {
                console.log("Error: Saving to local storage.");
            }
        }
    }

    function getInfo() {
        console.log("Getting your data from local storage.");
        $("#name").val($.jStorage.get("name"));
        $("#age").val($.jStorage.get("age"));
    }

    function load() {
        if (typeof(Storage) == "undefined" ) {
            alert("Your browser does not support HTML5 localStorage. Try upgrading.");
        }
        else {
            console.log("Both localStorage and sessionStorage support is there.");
        }
    }

    function sComplexData() {
        console.log("Saving complex data to local storage.");
        var personObject = new Object();
        personObject.name = $("#name").val();
        personObject.age = $("#age").val();
        $.jStorage.set("person", JSON.stringify(personObject));
    }

    function rComplexData() {
        console.log("Restoring complex data from local storage.");
        var personObject = JSON.parse($.jStorage.get("person"));
        $("#name").val(personObject.name);
        $("#age").val(personObject.age);
    }    

    function getTTLforName() {
        var ttl = $.jStorage.getTTL("name");
        $("#gTTL").html("TTL time for 'name' key, using simple store: " + ttl);
    }