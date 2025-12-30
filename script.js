function downloadPDF() {
    const lyricsText = document.getElementById("lyrics").innerText;

    const blob = new Blob([lyricsText], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "/Users/niranjanphadtare/Desktop/WEB Development Program/Vishnu Sahasranam/Vishnu Sahasranam Lyrics.pdf";
    a.click();

    window.URL.revokeObjectURL(url);
}
