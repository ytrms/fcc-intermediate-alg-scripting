function spinalCase(str: String) {
    let dashedStr = str.replace(/[\s_]/g, "-");
    let spacedOut = dashedStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()

    console.log(spacedOut);
    return spacedOut;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");