# Developing solution vision, intent and roadmaps

## Solution Vision
Provides a connection between the longer-term, aspirational ‘what could be' and the ‘what will likely be' that a 
solution or program train needs to accomplish over the next year. It reflects customer and stakeholder needs. It is
aspirational and sets boundaries and context for new features, NFRs and other work

* Elements of the vision are aspirational, not necessarily totally achievable. What we 'should' deliver, not what we 'will' deliver

## Solution Context
Solution context is where the solution is deployed, which is driven by how it will be used. Solution architecture 
is influenced heavily by solution context

* Solution context constrains all aspects of the solution
* Teams across all involved trains and suppliers will add context and detail to the solution intent
* Examples: Customer personas, existing infrastructure and ways our society works

## Solution Intent
Solution intent is a knowledge repository that is a record of decisions driving the solution. Favor models over documentation. 
Use minimum sufficient documentation. Keep solution intent collaborative and make decisions as late as possible. Document
items in a single place. High level supports change
* Records and communicates requirements, design, and system architecture decisions (ADRs)
* Facilitates continuous exploration and analysis activities (Spikes/Experiments)
* Aligns the customer, Development Team and Suppliers to a common purpose (vision)
* Supports compliance, contractual agreements, traceability, high assurance (regulatory and compliance)
* Collaborative effort between teams and program leadership (product management)
* Examples: Use-case, component and connector, sequence diagrams

## Moving from variable to fixed Solution Intent
* Fixed - things that are already built and hard to change, but we can get value from
* Variable - things that are not built yet, can result in more WIP until things are fixed
* Document fixed concepts. Avoid documenting concepts that are still variable

## Model-based systems engineering (MBSE)
* MBSE helps us with modeling to capture changing solution intent and context
* Lean QMS = many cycles of Plan, do, check, adjust (explore alternatives and learn faster, consider compliance and impact analysis)
* Accelerate learning before the cost of change gets too high
* Aligns with SAFE Principle 4

## NFRs
Are constraints on the backlog
* Architecture evolves to support NFRs
* Architects 'OWN' NFRs through their complete lifecycle (core competency of architects)
* Implementation should occur in a way that will allow several learning cycles to determine the right level of NFR
* Focus on fixed NFRs now and variable ones later
* Name/Scale(what/units)/Meter(method) -> (step 2) Constraint(worst)/Baseline(current)/Target(future)
* Automate compliance and NFR tests

## Road maps
* influenced by market behaviour
  * Market 'rhythms' are cyclical and predictable
  * Market 'events are ad hoc
* Structure 
  1. Solution roadmap (multi-year)
  2. PI roadmap (multi-PI 3-4)
  3. Current PI plan
  4. Iteration plan
  5. Daily plan

## Architectural runway
is working code and infrastructure not then plan for it
* should be one of two PIs ahead of its use
* architects partner with delivery teams to build it
* Decentralise the effort to ensure runway evolves as needed
* Intentional architecture (just enough)- Specific guidelines produced by Architects that ensure the long-term performance and usability of Solutions
* Emergent design (Decentralised, trust teams with design decisions)- Process by which Agile Teams extend and improve the architecture as needed to support Feature delivery
* A balance between intentional architecture and emergent design is required for speed of development and maintainability 