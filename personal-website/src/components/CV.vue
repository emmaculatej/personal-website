<template>
    <div>           
        <button class="btn btn-lg" style="background-color: white; color: coral;"  v-on:click="generate"> CV button </button>
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
