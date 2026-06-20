export default function AuthorsPage() {
  return (
    <>
      <div className="journal-card" id="authors">
        <h2>Information for Authors</h2>
        <p>
          We welcome submissions that contribute novel insights to Management, Business, Ethics, and Social Sciences.
        </p>

        <div id="cfp">
          <h3>Call for Papers 2025</h3>
          <p>Submissions for the upcoming Volume 3, Issue 4 are actively open. Researchers, academicians, and advanced scholars are strongly encouraged to apply by the September 30th deadline to ensure full consideration.</p>
        </div>

        <div id="guidelines">
          <h3>Guidelines for Authors</h3>
          <p>Manuscripts must be submitted electronically in Microsoft Word (.doc/.docx) format. Only full-length original research articles and comprehensive review papers will be processed.</p>
        </div>

        <div id="manuscript">
          <h3>Manuscript processing fees</h3>
          <ul style={{ paddingLeft: 20, marginBottom: 14, lineHeight: 1.8 }}>
            <p>Author(s) of the accepted manuscript are subjected to pay INR 2000 as manuscript processing fees in order to defray the operating costs. Author(s) will be entitled to one copy of the printed journal without any charges. Procedure and mode of payment will be notified individually to the author(s).</p>
          </ul>
        </div>
        <div id="subscription">
          <h3>
            Subscription Fees
          </h3>
          <p>

            Academician INR 750 <br />
            Research Scholar & Students INR 500 <br />
          </p>

        </div>

        <div id="notable">
          <h3>Notable Points</h3>
          <p>To facilitate the double-blind peer review process, ensure that all identifying markers (such as author names, affiliations, and acknowledgements) are entirely removed from the main manuscript document and are only included in your final Title Page.</p>
        </div>
      </div>
    </>
  );
}
