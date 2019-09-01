<template>
    <div>           
        <button class="btn btn-lg cvButton" v-on:click="generate"> Generate CV</button>
    </div>
</template>

<script lang="ts">
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

export default {
    name: 'CV',
    methods: {
        generate() {
            const doc = new Document();

            doc.addSection({
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "Foo Bar",
                                bold: true,
                            }),
                            new TextRun({
                                text: "Github is the best",
                                bold: true,
                            }).tab(),
                        ],
                    }),
                ],
            });

            Packer.toBase64String(doc).then((str) => {
                fs.writeFileSync("My Document.docx", str);
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
