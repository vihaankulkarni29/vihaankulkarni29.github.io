permalink: /projects/ title: "Projects"
Personal Bioinformatics Projects
A collection of tools I have developed to solve common bottlenecks in genomics research and data analysis.

NCBI Genome Harvester
An automated Python tool to download high-quality genomes and rich metadata from NCBI.

The Problem: Researchers often spend hours manually downloading individual genome files and then searching for their corresponding metadata (like BioSample, collection date, or AMR data). This process is slow, tedious, and prone to error.

My Solution: I developed a command-line tool in Python that takes a simple list of accession numbers or a species query and automatically fetches both the FASTA files and a comprehensive set of metadata, organizing it all into a clean, analysis-ready table.

The Impact: This tool automates a process that could take hours, reducing it to minutes. It has been validated by the research community, generating over 10,000 impressions on LinkedIn.

View on GitHub : https://github.com/vihaankulkarni29/ncbi_genome_extractor

WildTypeAligner & SubScan 
A two-part system to automate batch sequence alignment and mutation cataloging.

The Problem: Identifying amino acid substitutions across dozens or hundreds of sequences requires manually running pairwise alignments against a reference and then painstakingly scanning each output file to find the differences. This is a significant time sink in comparative genomics.

My Solution: I built a system where WildTypeAligner automates the batch pairwise alignment of thousands of protein sequences against a reference, and SubScan then automatically parses all the output files, identifies every substitution, and consolidates the findings into a single, analysis-ready .csv file.

The Impact: This system fully automates a workflow that would take several hours of manual work, reducing it to under two minutes while eliminating the potential for human error.

View on GitHub: https://github.com/vihaankulkarni29/wildtype-aligner
                https://github.com/vihaankulkarni29/SubScan

