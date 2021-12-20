

const app = {
    modeColor: function () {
        document.getElementById('dark').addEventListener('click', () => {
            document.documentElement.style.setProperty("--primarycolor", "")
            document.documentElement.style.setProperty("--textlight", "")
            document.documentElement.style.setProperty("--textdark", "")
            document.documentElement.style.setProperty("--graymedium", "")
            document.documentElement.style.setProperty("--graylight", "")
            console.log('modedard')
        })
        document.getElementById('light').addEventListener('click', () => {
            document.documentElement.style.setProperty("--primarycolor", "#FFFFFF")
            document.documentElement.style.setProperty("--textlight", "#22252d")
            document.documentElement.style.setProperty("--textdark", "#F1F1F1")
            document.documentElement.style.setProperty("--graymedium", "#F9F9F9")
            document.documentElement.style.setProperty("--graylight", "#F7F7F7")
            console.log('modedar')
        })
    },
    handle: function () {

    },
    render: function () {
        //code
    },
    start: function () {
        this.handle()
        this.modeColor()
        this.render()
    }
}

app.start()

