---

title: Projects

permalink: /projects/

---



\# Projects — Selected Tools \& Pipelines



Below are compact case-studies of the tools I develop. Each one is engineered for reproducibility, clear inputs/outputs, and publication-ready results.



---



\## FastAAExtractor  

\*\*One-line:\*\* Fast, reproducible extraction of amino-acid sequences from FASTA + coordinate tables.  

\*\*Problem:\*\* Extracting protein sequences for specific genes across many isolates is tedious and error-prone.  

\*\*Solution:\*\* A tool that accepts a FASTA and a flexible coordinate file (TSV/CSV/XLSX), extracts requested gene sequences, avoids duplicates, and outputs per-isolate FASTA files.  

\*\*Impact:\*\* Speeds up downstream comparative analyses and integrates with our WildTypeAligner pipeline.  

\*\*Repo:\*\* https://github.com/vihaankulkarni29/FastAAExtractor



---



\## WildTypeAligner  

\*\*One-line:\*\* EMBOSS Needle–style protein alignments with mutation-reporting and Excel summaries.  

\*\*Problem:\*\* Standard alignments are hard to aggregate and compare across many isolates.  

\*\*Solution:\*\* Produces Needle-style alignment outputs (identity, similarity, gaps, score) and per-comparison Excel reports; integrates SubScan for substitution detection.  

\*\*Impact:\*\* Enables rapid screening for novel polymorphisms and creates reproducible evidence for presentations and publications.  

\*\*Repo:\*\* https://github.com/vihaankulkarni29/WildTypeAligner



---



\## MetaAcrPipeline (Meta-AcrAB/TolC pipeline)  

\*\*One-line:\*\* Large-scale pipeline to extract and analyze efflux system variation across \*E. coli\* isolates with geographic metadata.  

\*\*Problem:\*\* Tracking protein-level variation across thousands of genomes with metadata is complex and time-consuming.  

\*\*Solution:\*\* A metadata-aware pipeline that extracts AcrAB–TolC and associated regulators, aligns to K-12 references, and produces mutation maps and region-based summaries.  

\*\*Impact:\*\* Designed for population-level surveillance and structural interpretation of resistance-associated mutations.  

\*\*Repo:\*\* https://github.com/vihaankulkarni29/MetaAcrPipeline



---



\### Want a deeper case study?

Each project has a short case study in its repository: problem, input formats, example commands, expected outputs, and minimal test data. If you’d like, I can migrate the short case-study content to a “Project details” section on the Projects page.



