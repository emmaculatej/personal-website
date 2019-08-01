<template>
    <div>           
        <button class="btn btn-lg cvButton" v-on:click="generate"> Generate CV</button>
    </div>
</template>

<script>
import { Document, Paragraph, Packer, TextRun } from "docx";
import { saveAs } from 'file-saver';

export default {
    name: 'CV',
    methods: {
    generate() {
                const doc = new Document();

                const paragraph = new Paragraph("Hello World");
                const institutionText = new TextRun("Foo Bar").bold();
                const dateText = new TextRun("Github is the best").tab().bold();
                paragraph.addRun(institutionText);
                paragraph.addRun(dateText);

                doc.addParagraph(paragraph);

                const packer = new Packer();

                packer.toBlob(doc).then(blob => {
                    saveAs(blob, "myCV.docx");
                });
    }
    }
}

</script>

<style scoped>
.cvButton {
    background-color: white; 
    color: coral;
    width: 45%;
    height: 40%;    
}
</style>
