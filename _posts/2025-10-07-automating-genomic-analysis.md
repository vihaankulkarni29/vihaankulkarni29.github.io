---
layout: post
title: "How I Automated a 2-Hour Genomic Workflow Down to 2 Minutes"
date: 2025-10-07 16:30:00 +0530
tags: [automation, python, bioinformatics, amr]
---

[cite_start]During my research internship at IISER Pune, I encountered a common bottleneck in genomics: the painfully slow process of manual data extraction[cite: 13, 100]. Talented microbiologists were spending entire afternoons on repetitive tasks that were ripe for automation. [cite_start]Specifically, identifying amino acid mutations from dozens of *E. coli* genome assemblies was a 2+ hour ordeal of manual sequence alignment and comparison[cite: 12].

This wasn't just inefficient; it was a barrier to discovery. When simple data processing takes hours, the number of hypotheses you can test is severely limited.

### The Problem: A Manual Workflow

The existing process looked something like this:
1.  Receive dozens of `.fasta` files for different bacterial strains.
2.  Manually use NCBI tools to find specific genes of interest.
3.  Extract the corresponding amino acid sequences.
4.  Perform pairwise alignments against a wild-type reference.
5.  Manually scan the alignment results to spot and log every single mutation.

This workflow was not only slow but also prone to human error. A single copy-paste mistake could invalidate an entire dataset.

### The Solution: Building a Custom Python Pipeline

I knew this could be solved with code. I developed a two-part system to automate the entire process:

-   **FastaAAExtractor:** A Python script that takes a list of genome files and a coordinate table as input and instantly extracts all the required amino acid sequences.
-   **SubScan:** Another script that takes the output from FastaAAExtractor, performs batch pairwise alignments using Biopython, and automatically generates a clean `.csv` report of all identified substitutions.

[cite_start]By chaining these tools together in a simple workflow, we replaced a multi-hour manual task with a single command that runs in **under two minutes**[cite: 12, 100].

### The Impact: More Than Just Speed

The result wasn't just about saving time. It was about enabling better science. By completely automating the mutation discovery process, the research team could:
-   **Analyze larger datasets:** We could now process hundreds of genomes in the time it used to take to process a few dozen.
-   **Increase accuracy:** The automated report eliminated the risk of manual data entry errors.
-   **Focus on interpretation:** Researchers could spend their valuable time analyzing the biological significance of the mutations, rather than finding them.

This experience solidified my belief that the future of biology depends on building efficient, user-friendly tools that empower researchers to make sense of their data at scale. The code for these tools is open-source, and I believe this approach can be adapted to solve similar bottlenecks in labs everywhere.